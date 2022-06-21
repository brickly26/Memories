import express from 'express';

import { getPosts } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts(req,res));

export default router;