<template>
  <div id="app">
    <golden-layout
      class="goldenlayout"
    >
      <gl-row>
        <gl-component title="component1">
          <h1>Component 1</h1>
          <span v-if="pokemon">
            {{ pokemon.name }} / {{ pokemon.number }}
          </span>
        </gl-component>
        <gl-stack>
          <gl-component title="component2">
            <h1>Component 2</h1>
          </gl-component>
          <gl-component title="component3">
            <h1>Component 3</h1>
          </gl-component>
        </gl-stack>
      </gl-row>
    </golden-layout>
  </div>
</template>

<script>

import gql from 'graphql-tag'

export default {
  apollo: {
    pokemon: {
      query: gql`
        query {
          pokemon(name: "Pikachu") {
            id
            number
            name
            attacks {
              special {
                name
                type
                damage
              }
            }
            evolutions {
              id
              number
              name
              weight {
                minimum
                maximum
              }
              attacks {
                fast {
                  name
                  type
                  damage
                }
              }
            }
          }
        }
      `,
      result ({ data }) {
        console.log(data)
      }
    }
  }
}
</script>

<style lang="scss">
.goldenlayout {
  height: 90vh;
}
</style>
