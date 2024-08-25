const express = require("express");
const Kabupaten = require("../models/kabupaten.js");
const Provinsi = require("../models/provinsi.js");
const User = require("../models/user.js");
const datePostConvert = require("../utils/time/datePostConvert.js");
const calculateAgePost = require("../utils/time/agePost.js");

async function renderHome(req, res, next) {
  const view = req.query.view;
  const userSession = req.session.user;
  const filter = req.query.filter;
  const regexFilter = /[0-9]/.test(filter);

  const user = await User.findOne({
    where: {
      id: userSession.id,
    },
  });

  let whereCondition = {
    user_id: userSession.id,
  };

  if (filter && !regexFilter) {
    whereCondition.pulau = filter;
  }

  const provinsi = await Provinsi.findAll({
    where: whereCondition,
  });

  const renderOption = {
    layout: "template/template.ejs",
    user,
    provinsi,
    filter,
    datePostConvert,
    calculateAgePost,
  };

  if (view == "kabupaten") {
    const kabKondition = {
      user_id: userSession.id,
    };

    if (filter) kabKondition.provinsi_id = filter;

    const kabupaten = await Kabupaten.findAll({ where: kabKondition });
    renderOption.kabupaten = kabupaten;
    renderOption.active = "kabupaten";

    return res.render("kabupaten.ejs", renderOption);
  } else {
    renderOption.active = "provinsi";
    return res.render("provinsi.ejs", renderOption);
  }
}

module.exports = { renderHome };
