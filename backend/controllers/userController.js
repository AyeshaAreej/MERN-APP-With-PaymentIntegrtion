const User=require('../models/user')
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')
const JWT_SECRET='sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjksss'


const signupPage = (req,res)=>{
    return res.render('signupPage')
}


//JWT authentication
const createUser = async (req,res)=>{
    const { username, password: plainTextPassword } = req.body
    if (!username || typeof username !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
	}
    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

    const password = await bcrypt.hash(plainTextPassword, 10)



    try{
    const response= await User.create({
        username,
        password
        },
        (err,user)=>{
        if (err) {
            console.log('error in signup')
            return res.redirect('/');
          }
          return res.render('loginPage')
    })
    console.log('User created successfully: ', response)
  
} catch (error) {
    if (error.code === 11000) {
        // duplicate key
        return res.json({ status: 'error', error: 'Username already in use' })
    }
    throw error
}
return res.render('loginPage')
// res.json({ status: 'ok' })
}

//login
const validateUser = async (req,res)=>{

    const {username,password}=req.query;
    console.log(username)
    const user = await User.findOne({ username }).lean()
     if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET,
		)

		// return res.json({ status: 'ok', data: token })
        return  res.redirect('/home');

    }

	res.json({ status: 'error', error: 'Invalid username/password' })
}



module.exports = {signupPage,createUser,validateUser}