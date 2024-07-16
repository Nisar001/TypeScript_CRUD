import express from 'express'
import EmployeeController from '../controllers/EmployeeController';
const router = express.Router();

router.get('/employees', EmployeeController.getAllEmployee);
router.get('/employee/:id', EmployeeController.getEmployee)
router.post('/create', EmployeeController.createEmployee);
router.put('/update/:id', EmployeeController.updateEmployee);
router.delete('/delete/:id', EmployeeController.deleteEmployee)

export default router;