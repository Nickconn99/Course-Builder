const router = require('express').Router();
const { Planner, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPlanner = await Planner.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPlanner);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const plannerData = await Planner.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if (!plannerData) {
            res.status(404).json({ message: 'No Playlist with that id found!'});
            return;
        }

        res.status(200).json(plannerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;