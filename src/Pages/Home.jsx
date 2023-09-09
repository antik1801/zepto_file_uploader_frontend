import React from 'react'
import DragAndDrop from '../utility/DragAndDrop'
import Titles from '../utility/Titles'
import Table from '../utility/Tables/Table'

const Home = () => {
  return (
    <div>
      <DragAndDrop />
      <div className='flex flex-col items-center '>
      <Titles text={"All Fonts"}></Titles>
      <Table></Table>
      </div>
    </div>
  )
}

export default Home
