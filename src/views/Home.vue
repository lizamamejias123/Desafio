<template>
    <div id="Aplicacion">
        <!-- Titulo -->
      <h1 id="Titulo">Tutoriales 
           <!-- Añadir -->
           <b-button id="Icon_pen" @click="Agregar_Materia"><b-icon icon="pencil" variant="white" scale="1" ></b-icon></b-button>
           </h1>
    
      <!-- Input Busqueda -->
      <small></small>
         <b-input-group id="Input">
    <b-form-input placeholder="Buscar por titulo" >Buscar por Titulo</b-form-input>
   
       <!-- Dropdown -->
       <b-dropdown id="Dropdown" right text="Ordenar por" variant="white" class="m-2">
    <b-dropdown-item href="#">Titulo</b-dropdown-item>
    <b-dropdown-item href="#">Fecha</b-dropdown-item>
    </b-dropdown>
</b-input-group> 

<!-- Tabla -->
 <b-table  :items="Titulos" @click='Detalle(ID)'>
     <div>
         <template>
             {{Titulo.materia}}
         </template> 
          <template>
             {{Titulo.Profesor}}
         </template>
     </div>
     <template>
             {{Titulo.Fecha}}
         </template>
 </b-table>

 <!-- Button -->
<b-button @click="Delete"  id="Eliminar">Eliminar Todos</b-button>
 
    </div>
</template>


<script>

import { mapState, mapActions } from "vuex"
export default {
    name:'Home',
    data() {
        return {  
        }
    },
    methods: {
        ...mapActions(['DeleteAll', 'ObtenerTitulos', 'Detalles']),
        // Agregar Materias
        Agregar_Materia(){
            this.$router.push({name: 'Agregar'})
        },
        // Eliminar todos
        Delete(){
            this.DeleteAll()
        },
        Detalle(Titulo){
            this.Detalles(Titulo);
            This.$router.push({ name:'Modificar'})
        }
    },
    mounted() {
        this.ObtenerTitulos()
    },
    computed: {
        ...mapState(['Titulo','Titulos'])
    },
    
}

</script>


<style lang="scss">
#Aplicacion{
    width: 30%;
    margin: auto;
    
}
    #Titulo{
background-color: #6200EE;
color: white;
padding: 15px 0px 15px 70px;
font-size: 30px;
margin: 0px 0px 20px 0px;
    }
    #Input{
        width: 95%;
        margin: auto;
    }
    #Dropdown{
        display: inline-block;
    }
    #Icon_pen{
        float: right;
        margin-right: 40px;
        background-color: #6200EE;
        border: none;  
    }
    #Eliminar{
        margin: auto;
        border: 1px solid #6200EE;
        color: #6200EE;
        background-color: white;
    }

</style>