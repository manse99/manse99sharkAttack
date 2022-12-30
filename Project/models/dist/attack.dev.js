"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var attackData = new Schema({
  datasetid: {
    type: String
  },
  recordid: {
    type: String
  },
  fields: {
    activity: {
      type: String
    },
    location: {
      type: String
    },
    sex: {
      type: String,
      "enum": ["M", "F"]
    },
    year: {
      type: String
    },
    injury: {
      type: String
    },
    case_number: {
      type: String
    },
    time: {
      type: String
    },
    name: {
      type: String
    },
    age: {
      type: Number
    },
    species: {
      type: String
    },
    date: {
      type: String
    },
    type: {
      type: String
    },
    area: {
      type: String
    },
    country: {
      type: String
    },
    fatal_y_n: {
      type: String,
      "enum": ["Y", "N", "Nq"]
    }
  }
});

var _default = _mongoose["default"].model("attacks", attackData);

exports["default"] = _default;