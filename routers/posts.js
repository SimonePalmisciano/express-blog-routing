import express from 'express';

const router = express.Router();

router.get('/', index);

router.get('/:id', show);

router.post('/', create);