import express from 'express';
import { index, show } from '../controllers/postsController';

const router = express.Router();

router.get('/', index);

router.get('/:id', show);

router.post('/', create);

router.put('/:id', update);

router.patch('/:id', modify);

router.delete('/:id', destroy);