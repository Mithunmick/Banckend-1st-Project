const Bootcamp = require('../models/Bootcamp');

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
exports.createBootcamps = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp,
  });

  // try {
  //   const bootcamp = await Bootcamp.create(req.body);

  //   res.status(201).json({
  //     success: true,
  //     data: bootcamp,
  //   });
  // } catch (err) {
  //   res.status(400).json({ success: false });
  // }
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
