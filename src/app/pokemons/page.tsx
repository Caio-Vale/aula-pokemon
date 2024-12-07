'use client'

import { useEffect, useState } from "react"
import { Pokemon } from "../@types/pokemon"

export default function PokemonsPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  async function getPokemons() {
    for (let i = 1; i <= 10; i++) {
      const pokemon = await getPokemonById(i)
      if (pokemon) {
        setPokemons((pokemons) => [...pokemons, pokemon])
      }
    }
  }

  async function getPokemonById(id: number) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    try {
      const response = await fetch(`${baseUrl}/${id}/`)
      const pokemon = await response.json()

      return pokemon
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.other?.showdown?.front_shiny ?? ''} alt="" />
            {pokemon.types.map((item) => <p key={item.type.name}>{item.type.name}</p> )}
        </div>
        ))}
    </>
  )
}