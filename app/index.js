module.exports = (name, data, body) => {
  const { three, four } = body

  console.log('🥺 ~ file: index.js ~ line 2 ~ four', four)
  console.log('🥺 ~ file: index.js ~ line 2 ~ three', three)
  console.log('🥺 ~ file: index.js ~ line 2 ~ data', data)
  const conts = 'sadasdasdxX'

  const hola = [
    'hola', 'hola', 'hola', 'hola', 'hola', 'hola', 'hola',
    'hola', 'hola', 'hola', 'hola', 'hola',
  ]
  console.log('🥺 ~ file: index.js ~ line 5 ~ hola', hola)

  const hello = `Hello, ${name}!`

  console.log('🥺 ~ file: index.js ~ line 6 ~ hello', hello)
  const a = 'ds'
  console.log('🥺 ~ file: index.js ~ line 8 ~ a', a)
  return conts
}
