import Home from '../pages/Home';
import Detail from '../pages/Detail';

import {router} from 'san-router'

router.add({rule: '/', Component: Home, target: '#app'});
router.add({rule: '/detail/:id', Component: Detail, target: '#app'});

export default router;