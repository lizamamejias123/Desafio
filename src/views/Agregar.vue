<template>
    <div id="Aplicacion">
         <!-- Titulo -->
      <h1 id="Titulo">Agregar Tutoriales</h1>
      <!-- Formulario -->
      <b-form @submit="AgregarLista" @reset="ResetList">
      <!-- Titulo -->
       <small>Titulo</small>
         <b-input-group id="Input">
    <b-form-input placeholder="Titulo" required v-model="datos.Titulo"></b-form-input> </b-input-group>
    <!-- Profesor -->
       <small>Profesor</small>
         <b-input-group id="Input">
    <b-form-input placeholder="Profesor" required v-model="datos.Profesor"></b-form-input> </b-input-group>
    <!-- Materia -->
       <small>Materia</small>
         <b-input-group id="Input">
    <b-form-input placeholder="Materia" required v-model="datos.Materia"></b-form-input> </b-input-group>
    <!-- Fecha -->
       <small>Fecha</small>
         <b-input-group id="Input">
    <b-form-input placeholder="Fecha"  required v-model="datos.Fecha"></b-form-input> </b-input-group>
    <b-button id="Button_Agregar" type='submit'   > Agregar</b-button>
        </b-form>
    </div>
</template>


<script>
// AXIOS
import axios from 'axios'
export default {
    name:'Home',
    data() {
        return {
            datos:{
                Titulo:'',
                Profesor:'',
                Materia:'',
                Fecha:'',
            }   
        }
    },
    methods: {
        AgregarLista(evento){
             evento.preventDefault()
            let ListaTutorial = {
                Titulo: this.datos.Titulo,
                Profesor: this.datos.Profesor,
                Materia: this.datos.Materia,
                Fecha: this.datos.Fecha
            };
            axios.post('https://rayentutorialtestapp.azurewebsites.net/createtutorial', ListaTutorial).
            then((respuesta) => {  
                if(respuesta.data.id !== undefined){ 
                    this.$router.push({name:'Home'})
                    alert('Exitoso')
                }else{
                  console.log(Error)  
                  alert('Ingrese Correctamente')
                }
            })
        },
        ResetList(evento) {
      evento.preventDefault();

    },}
    
}
</script>


<style lang="scss">
    small{
        padding: 0px 0px 7px 25px;
    }
    #Button_Agregar{
        float: right;
        margin: 30px;
        background-color: #6200EE;

    }
</style>