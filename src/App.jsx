import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import { motion } from 'framer-motion'
import ParticlesBg from './components/ParticlesBg'

function App() {
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud('/users/')
  const [userSelected, setUserSelected] = useState()
  const [formIsOpen, setFormIsOpen] = useState(false)

  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenForm = () => {
    setFormIsOpen(true)
  }
  
  return (
    <>
    <ParticlesBg id="particles" />
    <div className='app'>
      <header className='user__header'>
        <h1>
        <motion.div animate={{x:2}}>Crud User</motion.div>
        </h1>
        <button onClick={handleOpenForm} className='new__user__btn'>New User</button>
      </header>
      
      <FormUser createUser={createUser} userSelected={userSelected} setUserSelected={setUserSelected} updateUser={updateUser} setFormIsOpen={setFormIsOpen} formIsOpen={formIsOpen} />
      <section className='user-container flex-container'>
        {
          users?.map((user) => (
          <UserCard key={user.id} user={user} deleteUser={deleteUser} setUserSelected={setUserSelected} setFormIsOpen={setFormIsOpen} />
          )
          )
        }
      </section>
    </div>
    </>
  )
}

export default App
