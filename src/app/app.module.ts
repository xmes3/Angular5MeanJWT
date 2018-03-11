import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// importar módulo propio
import { ModuloEmailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';

// Componente
import { AppComponent } from './app.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ParqueComponent } from './parque/parque.component';
import { AnimalsComponent } from './animals/animals.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { KeepersComponent } from './keepers/keepers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserEditComponent } from './user-edit/user-edit.component';

// servicios
import { UserService } from './services/user.service';
import { AdminGuard } from './services/admin-guard';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParqueComponent,
    AnimalsComponent,
    HomeComponent,
    ContactComponent,
    KeepersComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders,
    UserService,
    AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

