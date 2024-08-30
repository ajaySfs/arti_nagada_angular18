import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./products/products.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'arti_nagada';
  cards = [
    { image: 'assets/images/client-1.png', title: 'Dilip Panwar', description: 'I did lot of research before purchasing the product and realised that Vishwakarma is one of the best manufacturer for Automatic Nagada Machine. Their delivery process is also very smooth and robust. Would like to deal again in future' },
    { image: 'assets/images/client-2.png', title: 'Jon', description: 'I did lot of research before purchasing the product and realised that Vishwakarma is one of the best manufacturer for Automatic Nagada Machine. Their delivery process is also very smooth and robust. Would like to deal again in future' },
    { image: 'assets/images/client-1.png', title: 'Danial', description: 'I did lot of research before purchasing the product and realised that Vishwakarma is one of the best manufacturer for Automatic Nagada Machine. Their delivery process is also very smooth and robust. Would like to deal again in future' },
    { image: 'assets/images/client-2.png', title: 'ben', description: 'I did lot of research before purchasing the product and realised that Vishwakarma is one of the best manufacturer for Automatic Nagada Machine. Their delivery process is also very smooth and robust. Would like to deal again in future' },
    { image: 'assets/images/client-1.png', title: 'krish', description: 'I did lot of research before purchasing the product and realised that Vishwakarma is one of the best manufacturer for Automatic Nagada Machine. Their delivery process is also very smooth and robust. Would like to deal again in future' },
    { image: 'assets/images/client-2.png', title: 'taler', description: 'I did lot of research before purchasing the product and realised that Vishwakarma is one of the best manufacturer for Automatic Nagada Machine. Their delivery process is also very smooth and robust. Would like to deal again in future' }
    // Add more cards as needed
  ];

  currentTransform = 0;
  visibleCards = 3;

  get maxTransform() {
    return -(this.cards.length - this.visibleCards) * (100 / this.visibleCards);
  }

  ngOnInit() {
    // Automatically slide every 3 seconds
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Adjust the interval as needed
  }

  prevSlide() {
    if (this.currentTransform < 0) {
      this.currentTransform += 100 / this.visibleCards;
    }
  }

  nextSlide() {
    if (this.currentTransform > this.maxTransform) {
      this.currentTransform -= 100 / this.visibleCards;
    }
  }

  home(){
    this.router.navigate(['/'])
  }
}

