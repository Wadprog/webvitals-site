import React from 'react'

export type Witness = {
  name: string
  title: string
  image: string
  starCount: number
}

const Witness = (client: Witness) => {
  return (
    <div className=" flex flex-col justify-center">
      {console.log({ star: client.starCount, arr: Array(4).length })}
      <img
        src={client.image}
        alt={client.name}
        className="rounded-full w-[80px]"
      />
      <p>
        {['', ''].map((star, index) => (
          <div key={`star-${index}`}>{star}</div>
        ))}
      </p>
      <h4 className="text-2x text-center font-semibold">{client.name}</h4>
      <small className="text-center">{client.title}</small>
    </div>
  )
}

export default Witness
