const express = require("express")
const router = express.Router()
const {get_all_contents,
    post_contents ,
    get_contents ,
    update_contents ,
    delete_contents ,
    add_content_form,
success,} = require("../controller/controller");

router.route("/")  //콘택츠로 접속했을떄
    .get(get_all_contents)

router.route("/add").get(add_content_form).post(post_contents);

router.route("/success").get(success);

router.route("/:id")
    .get(get_contents)
    .put(update_contents)
    .delete(delete_contents);


module.exports = router;