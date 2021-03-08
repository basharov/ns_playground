import React from 'react'
import { GlobalStyle, Wrapper } from './App.styles'
import { Counter } from './components/Counter/Counter'

const App = () => {
    return <Wrapper>
        <GlobalStyle/>

        <Counter initialValue={0}/>

    </Wrapper>
}

export { App }
