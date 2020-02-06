import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";

import { AppComponent } from "./app.component";
import { TodoService } from "./todo.service";
import { TodoStore } from "./state/todo.store";
import { TodoQuery } from "./state/todo.query";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AkitaNgDevtools.forRoot()],
  providers: [TodoService, TodoStore, TodoQuery],
  bootstrap: [AppComponent]
})
export class AppModule {}
