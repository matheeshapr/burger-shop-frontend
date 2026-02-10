import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./component/navbar/navbar";
import { Dashboard } from "./component/dashboard/dashboard";
import { Menu } from "./pages/menu/menu";
import { Footer } from "./component/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Dashboard, Menu, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('burger-shop-frontend');
}
