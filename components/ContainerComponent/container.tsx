import Vue from "vue"
import {Container} from "./styles"
import { Component, Prop } from "nuxt-property-decorator"


@Component({})
export class ContainerComponent extends Vue{
 render(){
  return(
    <Container>
      VIDA DE CRISTO
    </Container>
  )
 }
}
