import React from 'react'
import { render } from 'react-dom'
import ModularPage from './components/ModularPage'
//import data from './data/myData'

window.React = React

render(
    <ModularPage/>,
    document.getElementById("react-container")
)