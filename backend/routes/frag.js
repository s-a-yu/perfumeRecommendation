const Fragrance = require('../models/Fragrance');
const User = require('../models/User');
const express = require('express');
const router = express.Router();

// GET all fragrances saved to user's profile
router.get('/', async (req, res) => {
    try {
        const fragrances = await Fragrance.find();
        res.json(fragrances);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Save a fragrance to user's profile
router.post('/save/user/fragrance', async (req, res) => {
    try {
        const { username, Brand, Name, Notes, Images } = req.body;
        console.log('username', username);
        console.log('Brand', Brand);
        console.log('Name', Name);
        console.log('Notes', Notes);
        console.log('Images', Images);

        // Check if the fragrance exists in the Fragrance collection
        let fragrance = await Fragrance.findOne({ Name });
        if (!fragrance) {
            // If the fragrance does not exist, create a new one
            fragrance = new Fragrance({ Brand, Name, Notes, Images: Images || [] });

            console.log('fragrance', fragrance);
            await fragrance.save();
            console.log(`Saved fragrance: ${Name}`);
        }

        // Find the user by ID
        const user = await User.findOne({username});
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: "User not found" });
        }
        console.log('user', user);

        // Check if the fragrance is already in the user's favorites list
        if (user.fragrance_favorites.includes(fragrance._id)) {
            console.log('Fragrance already in favorites list');
            return res.status(400).json({ message: "Fragrance already in favorites list" });
        }

        // Add the fragrance to the user's favorites list
        user.fragrance_favorites.push(fragrance._id);
        console.log('pushed fragrance to favorites', user.fragrance_favorites);
        await user.save();

        res.json({ message: "Fragrance added to favorites successfully", user });
        console.log('Fragrance added to favorites successfully');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// // Save a list of fragrances to the Fragrance collection
// router.post('/save/fragrance', async (req, res) => {
//     try {
//         const fragrances = req.body;
//         console.log('fragrances', fragrances);
//         for (let fragrance of fragrances) {
//             const { Brand, Name, Notes, images } = fragrance
//             console.log('fragrance', fragrance);

//             const existingFragrance = await Fragrance.findOne({ name: Name });
//             // Save fragrance if it doesn't already exist
//             if (!existingFragrance) {
//                 const newFragrance = new Fragrance({Brand, Name, Notes, images});
//                 console.log('newFragrance', newFragrance);
//                 await newFragrance.save();
//                 console.log(`Saved fragrance: ${fragrance.name}`);
//             }
//         }
//         res.json({ message: "Fragrances saved successfully" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

module.exports = router;

