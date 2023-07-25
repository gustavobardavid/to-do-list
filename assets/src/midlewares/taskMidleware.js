const validarCampoTitle= (req, res, next) => {
    const { body } = req;

    if (body.title === undefined) {
       return res.status(400).json({message: 'Campo titulo obrigatorio'});
    }

    if (body.title === '') {
        return res.status(400).json({message: 'Campo titulo não pode ser vazio'});
    }

    next();

};

const validarCampoLocal= (req, res, next) => {
    const { body } = req;

    if (body.local === undefined) {
       return res.status(400).json({message: 'Campo local obrigatorio'});
    }

    if (body.local === '') {
        return res.status(400).json({message: 'Campo local não pode ser vazio'});
    }

    next();

};

module.exports = {
    validarCampoLocal,
    validarCampoTitle
};