const Fragrance = require('../models/Fragrance');
const User = require('../models/User');
const express = require('express');
const router = express.Router();

router.get('/user/favorites', async (req, res) => {
    try {
        const { username } = req.query;
        console.log('username', username);

        // Validate the request query
        if (!username) {
            return res.status(400).json({ message: "Missing required query parameter: username" });
        }

        // Find the user by username
        const user = await User.findOne({ username }).populate('fragrance_favorites');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Return the user's favorite fragrances
        res.json(user.fragrance_favorites);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Remove a fragrance from user's profile
router.post('/remove/user/fragrance', async (req, res) => {
    try {
        const { username, Name } = req.body;
        console.log('username', username);
        console.log('Name', Name);

        // Find the user by ID
        const user = await User.findOne({username});
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: "User not found" });
        }
        console.log('user', user);

        // Find the fragrance by name
        const fragrance = await Fragrance.findOne({ Name });
        if (!fragrance) {
            console.log('Fragrance not found');
            return res.status(404).json({ message: "Fragrance not found" });
        }
        console.log('fragrance', fragrance);

        // Check if the fragrance is in the user's favorites list
        if (!user.fragrance_favorites.includes(fragrance._id)) {
            console.log('Fragrance not in favorites list');
            return res.status(400).json({ message: "Fragrance not in favorites list" });
        }

        // Remove the fragrance from the user's favorites list
        user.fragrance_favorites = user.fragrance_favorites.filter(fav => fav.toString() !== fragrance._id.toString());
        console.log('removed fragrance from favorites', user.fragrance_favorites);
        await user.save();

        res.json({ message: "Fragrance removed from favorites successfully", user });
        console.log('Fragrance removed from favorites successfully');
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

