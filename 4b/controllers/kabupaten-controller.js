const { where } = require("sequelize");
const Kabupaten = require("../models/kabupaten.js");
const Provinsi = require("../models/provinsi.js");
const { saveImage, deleteImage } = require("../utils/image/save");
const datePostConvert = require("../utils/time/datePostConvert.js");
const calculateAgePost = require("../utils/time/agePost.js");

async function renderKabupaten(req, res, next) {
  try {
    const user = req.session.user;
    let update = req.query.update || false;

    const provinsi = await Provinsi.findAll({
      where: {
        user_id: `${user.id}`,
      },
      attributes: ["id", "nama"],
    });

    if (update) {
      update = await Kabupaten.findOne({
        where: {
          id: update,
          user_id: user.id,
        },
      });
    }

    res.render("addKabupaten.ejs", {
      layout: "template/template.ejs",
      active: "kabupaten",
      user,
      provinsi,
      update,
    });
  } catch (err) {
    req.flash("danger", err.message);
    return res.redirect("/kabupaten");
  }
}

async function kabupaten(req, res, next) {
  try {
    const { nama, diresmikan, pulau, provinsi_id } = req.body;
    const user = req.session.user;
    const pathImage = `assets/uploads/${new Date().getTime()} - ${
      req.file.originalname
    }`;

    const provinsi = new Kabupaten({
      nama,
      diresmikan,
      pulau,
      user_id: user.id,
      provinsi_id,
      photo: pathImage,
    });

    await provinsi.save();
    saveImage(req.file.buffer, pathImage);

    req.flash("succes", "succesfuly added new kabupaten");
    res.redirect("/?view=kabupaten");
  } catch (err) {
    req.flash("danger", err.message);
    return res.redirect("/kabupaten");
  }
}

async function deleteKabupaten(req, res, next) {
  try {
    const id = req.params.id;
    const user = req.session.user;

    const provinsi = await Kabupaten.findOne({
      where: {
        user_id: `${user.id}`,
        id,
      },
    });

    deleteImage(provinsi.photo);

    await Kabupaten.destroy({
      where: {
        user_id: `${user.id}`,
        id,
      },
    });

    req.flash("succes", "kabupaten has been deleted");
    res.redirect("/?view=kabupaten");
  } catch (err) {
    req.flash("danger", err.message);
    return res.redirect("/?view=kabupaten");
  }
}

async function detailKabupaten(req, res, next) {
  try {
    const id = req.params.id;
    const user = req.session.user;

    const kabupaten = await Kabupaten.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Provinsi,
        },
      ],
    });

    const { Provinsi: provinsi } = kabupaten;

    res.render("kabupaten-detail.ejs", {
      layout: "template/template.ejs",
      active: "kabupaten",
      user,
      kabupaten,
      provinsi,
      calculateAgePost,
      datePostConvert,
    });
  } catch (err) {
    req.flash("danger", err.message);
    return res.redirect("/kabupaten");
  }
}

async function updateKabupaten(req, res, next) {
  try {
    const { nama, diresmikan, pulau, provinsi_id } = req.body;
    const id = req.params.id;
    const user = req.session.user;
    const pathImage = `assets/uploads/${new Date().getTime()} - ${
      req.file.originalname
    }`;

    const provinsi = await Kabupaten.findOne({
      where: {
        user_id: `${user.id}`,
        id,
      },
    });

    deleteImage(provinsi.photo);
    saveImage(req.file.buffer, pathImage);

    await Kabupaten.update(
      {
        nama,
        diresmikan,
        pulau,
        photo: pathImage,
        provinsi_id,
      },
      {
        where: {
          user_id: user.id,
          id,
        },
      }
    );

    req.flash("succes", "updated provinsi with succesfull");
    return res.redirect("/?view=kabupaten");
  } catch (err) {
    req.flash("danger", err.message);
    return res.redirect(`/kabupaten?update=${req.params.id}`);
  }
}

module.exports = {
  renderKabupaten,
  kabupaten,
  deleteKabupaten,
  detailKabupaten,
  updateKabupaten,
};
