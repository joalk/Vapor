// @desc    Get all puffs
// @route   GET /api/v1/puffs
// @access  Public
exports.getPuffs = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all puffs"})
}

// @desc    Create new puff
// @route   POST /api/v1/puffs
// @access  Private
exports.createPuff = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'create new puff'})
}

// @desc    Update puff
// @route   GET /api/v1/puffs/:id
// @access  Private
exports.updatePuff = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update puff ${req.params.id}`})
}

// @desc    Delete puff
// @route   GET /api/v1/puffs
// @access  Public
exports.deletePuff = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete puff ${req.params.id}`})
}