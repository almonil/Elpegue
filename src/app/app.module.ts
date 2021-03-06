import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing ,appRoutingProviders} from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { LineasComponent } from './componentes/lineas/lineas.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

import { UserService } from './servicios/user.service';

//guards
import { PrivateGuard } from './guards/private.guard';
import { UnregistredGuard } from './guards/unregistred.guard';
import { AdminGuard } from './guards/admin.guard';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ForoComponent,
    LineasComponent,
    ContactoComponent,
    ErrorComponent,
    InicioSesionComponent,
    RegistrateComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    PrivateGuard,
    UnregistredGuard,
    AdminGuard,    
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
