import react from 'react'
import {render,screen} from '@testing-library/react'
import App from './App'


describe('group test',()=>{
  
  it('verify get by role',()=>{
    render(<App/>)
    expect(screen.getByTitle('heading')).tobedefined()
  })
})
