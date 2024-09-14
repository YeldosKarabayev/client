import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { selectUserById } from './usersApiSlice'
import EditUserForm from './EditUserForm'
import PriceTag from '../../components/PriceTag'

const EditUser = () => {

  <div className="App">
      <h1>Пример ценника</h1>
      <div className="page">
        {[...Array(8)].map((_, index) => (
          <PriceTag 
            key={index}
            productName={`Продукт ${index + 1}`}
            description="Описание продукта"
            price={(index + 1) * 100 + ".00"}
          />
        ))}
      </div>
    </div>


  // const { id } = useParams()

  // const user = useSelector(state => selectUserById(state, id))

  // const content = user ? <EditUserForm user = {user} /> : <p>Загрузка...</p>

  // return content
}



export default EditUser

