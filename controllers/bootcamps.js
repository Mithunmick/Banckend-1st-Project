// @desc   Get all bootcamps
// @route  GET/api/v1/bootcamps
//@access  Public
exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: 'Show all bootcamps', hello: req.hello });
};

// @desc   Get single bootcamps
// @route  GET/api/v1/bootcamps/:id
//@access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get Bootcamp ${req.params.id}` });
};

// @desc   Create new bootcamp
// @route  POSTapi/v1/bootcamps/:id
//@access  Private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamps' });
};

// @desc   Update bootcamp
// @route  PUT/api/v1/bootcamps/:id
//@access  Private
exports.updateBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update Bootcamp ${req.params.id}` });
};

// @desc   Delete bootcamp
// @route  DELETE/api/v1/bootcamps/:id
//@access  Private
exports.deleteBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete Bootcamp ${req.params.id}` });
};
