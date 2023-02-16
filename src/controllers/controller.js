export const post = async (req, res, next, service) => {
    const params = req.body
    try {
        await service.performAction(...params);
        res.sendStatus(201);
        next();
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
}

export const get = async (req, res, next, service) => {
    const params = req.query;
    try {
        await service.performAction(...params);
        res.sendStatus(201);
        next();
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
}