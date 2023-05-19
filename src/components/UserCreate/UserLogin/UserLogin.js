import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/AuthOperation/authOperation';
import { DIV,WRAP,SPAN,Button } from '../UserRegister/UserRegister.styled';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const UserLogin = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("🚀  values:", values);
      
      dispatch(logInUser(values))
    },
  });

  return (
    <WRAP>
      <DIV>
        <form onSubmit={formik.handleSubmit}>
          <SPAN>Log in</SPAN>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="dense"
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            //   helperText="Please enter your password"
            margin="dense"
          />
          <SPAN>
            <Button type="submit">Submit</Button>
          </SPAN>
        </form>
      </DIV>
    </WRAP>
  );

};
export default  UserLogin;



