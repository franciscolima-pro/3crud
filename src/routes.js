import { Router } from 'express';
import { createTable, insert, showAll, showone, updat, delet } from "./controller/pessoa.js";

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "API Working!"
    })
})

router.get("/pessoas", showAll);
router.get("/pessoa", showone);
router.post("/pessoa", insert);
router.put("/pessoa", updat);
router.delete("/pessoa", delet);

export default router;