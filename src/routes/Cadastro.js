import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FluidExample from '../img/Logo/Logo';

function Cadastro() {
  return (
   <>
    <form class="row g-3 needs-validation" novalidate style={{
      maxWidth:"55%",
      color:"white",
      display:"block",
      margin:"50px auto auto auto",
      padding:"20px",
      background: "background: rgb(101,23,113)",
      background: "linear-gradient(131deg, rgba(101,23,113,1) 60%, rgba(127,1,179,1) 93%)",
      borderRadius:"10px",
      position: "relative"
      
    }}>
      <h1 style={{margin:"0px",marginBottom:"15px"}}>Cadastro</h1>
      <div style={{margin:"0px" , padding: "auto"}}>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Nome</label>
        <input type="text" class="form-control" id="validationCustom01"  required></input>
        <div class="valid-feedback">
        Parece bom!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Senha</label>
        <input type="Password" class="form-control" id="validationCustom02"  required></input>
        <div class="valid-feedback">
          Parece bom!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">Nome de Usuário</label>
        <div class="input-group">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
          <div class="invalid-feedback">
            Por favor escolha um nome de usuário.
          </div>
        </div>
      </div>
      <div class="col-md-6" style={{width:"33.3333%"}}>
        <label for="validationCustom03" class="form-label" >Cidade</label>
        <input type="text" class="form-control" id="validationCustom03" required ></input>
        <div class="invalid-feedback">
          Por favor escolha uma cidade válida.
        </div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Estado</label>
        <select class="form-select" id="validationCustom04" required>
          <option selected disabled value="">Escolha...</option>
          <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
        </select>
        <div class="invalid-feedback">
          Por favor escolha um estado válido
        </div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom05" class="form-label">CEP</label>
        <input type="text" class="form-control" id="validationCustom05" required></input>
        <div class="invalid-feedback">
          Por favor escolha um CEP válido
        </div>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required style={{marginTop:"15px"}}></input>
          <label class="form-check-label" for="invalidCheck"  style={{marginTop:"11px"}}>
           Concordar com os termos de serviço.
          </label>
          <div class="invalid-feedback">
            Você deve concordar antes de prosseguir.
          </div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-light" type="submit" style={{position:'absolute', bottom:"20px", right:"20px"}}>Enviar Inscrição</button>
      </div>
      
    </div>
    </form>
   </>
  )
}

export default Cadastro