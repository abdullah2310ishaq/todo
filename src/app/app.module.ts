import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/card/card.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/card/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent,
        UserComponent,
    ],
    imports:[BrowserModule,SharedModule,TasksModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}