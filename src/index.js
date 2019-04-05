import 'babel-polyfill';
import React from 'react'
import ReactDom from 'react-dom'

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
// import 'antd/dist/antd.css';



import loaderHome from 'bundle-loader?lazy&name=home!./pages/Home'
import loaderMyHome from 'bundle-loader?lazy&name=myhome!./pages/MyHome/home'
import loaderNews from 'bundle-loader?lazy&name=news!./pages/News'
import loaderHomeTab from 'bundle-loader?lazy&name=hometab!./pages/HomeTab/homeTab'
import loaderCourse from 'bundle-loader?lazy&name=course!./pages/Course'
import loaderJoinUs from 'bundle-loader?lazy&name=joinUs!./pages/JoinUs'
import loaderLogin from 'bundle-loader?lazy&name=joinUs!./pages/Login'
import loaderTestLogin from 'bundle-loader?lazy&name=joinUs!./pages/TestLogin'
import loaderTabTable from 'bundle-loader?lazy&name=cheatstate!./pages/TabTable/tabtable'
import loaderContractMessage from 'bundle-loader?lazy&name=changeMessage!./pages/TabTable/contractMessage/contractMessage'
import Bundle from './components/Bundle'
import './style.css';



const Home = (props) => (
	<Bundle load={loaderHome}>
    {(Home) => <Home {...props}/>}
  </Bundle>
)

const MyHome = (props) => (
	<Bundle load = {loaderMyHome}>
	{(MyHome) => <MyHome {...props} />}
	</Bundle>
)


const News = (props) => (
	<Bundle load={loaderNews}>
    {(News) => <News {...props}/>}
  </Bundle>
)

const Course = (props) => (
	<Bundle load={loaderCourse}>
    {(Course) => <Course {...props}/>}
  </Bundle>
)

const JoinUs = (props) => (
	<Bundle load={loaderJoinUs}>
    {(JoinUs) => <JoinUs {...props}/>}
  </Bundle>
)

const Login = (props) => (
	<Bundle load={loaderLogin}>
    {(Login) => <Login {...props}/>}
  </Bundle>
)

const TestLogin = (props) => (
	<Bundle load={loaderTestLogin}>
    {(TestLogin) => <TestLogin {...props}/>}
  </Bundle>
)
const MyHomeTab = (props) => (
	<Bundle load={loaderHomeTab}>
	{(TestHomeTab) => <TestHomeTab {...props}/>}
	</Bundle>

)
const TabTable = (props) => (
	<Bundle load={loaderTabTable}>
	{(TestTabTable) => <TestTabTable {...props}/>}
	</Bundle>

)
const ContractMessage = (props) => (
	<Bundle load={loaderContractMessage}>
	{(LoaderContractMessage) => <LoaderContractMessage {...props}/>}
	</Bundle>
)



const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={MyHome}/>
			<Route path="/testlogin" component={TestLogin}/>
			<Route path="/login" component={Login}/>
			<Route path="/news" component={News}/>
			<Route path="/course" component={Course}/>
			<Route path="/joinUs" component={JoinUs}/>
			<Route path="/hometab" component={MyHomeTab}/>
			<Route path='/tabtable/:data' component={TabTable} />
			<Route path='/contractMessage/:data' component={ContractMessage} />
			<Route path="/error" render={(props) => <div><h1>404 Not Found!</h1></div>}/>
			<Route path="*" render={(props) => <Redirect to='/error'/>}/>
		</Switch>
	</Router>
)

if (module.hot) {
	module.hot.accept(() => {
		ReactDom.render(
			<App />,
			document.getElementById('root')
		)
	})
}



ReactDom.render(
	<App />,
	document.getElementById('root')
)