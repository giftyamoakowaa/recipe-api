export const checkUserSession = (req, res, next) => {
    if (req. sesseion.user) {
        next();

    } else {
     res.status(401).json('No User Session');
    }
}