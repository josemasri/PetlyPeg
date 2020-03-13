import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DonacionesService } from '../../services/donaciones.service';
import { Donacion } from '../../interfaces/Donacion';

declare var paypal;

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.scss']
})
export class DonacionComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  addScript = false;

  cantidad: string;
  cantidadFinal: number;
  periodo: string;
  personalizado: string;
  @ViewChild('f') form: NgForm;


  constructor(
    private donacionesService: DonacionesService
  ) { }

  ngOnInit(): void {

  }

  actualizaCantidad() {
    if (this.cantidad === 'per') {
      if (this.personalizado) {
        this.cantidadFinal = Number(this.personalizado);
        this.initPaypal();
      }
    } else {
      this.cantidadFinal = Number(this.cantidad);
      this.initPaypal();
    }
  }

  initPaypal() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'Donacion a Petly',
                amount: {
                  currency_code: 'MXN',
                  value: this.cantidadFinal
                }
              }
            ]
          });
        },
        onApprove: (data, actions) => {
          // This function captures the funds from the transaction.
          return actions.order.capture().then((details) => {
            // This function shows a transaction success message to your buyer.
            const donacion = {
              nombre: details.payer.name.given_name,
              apellido: details.payer.name.surname,
              cantidad: details.purchase_units[0].amount.value,
              email: details.purchase_units[0].payee.email_address,
              periodo: 'unica',
              direccion: details.purchase_units[0].shipping.address.address_line_1 +
                ' ' + details.purchase_units[0].shipping.address.address_line_2 + ' '
                + details.purchase_units[0].shipping.address.postal_code
            };
            this.donacionesService.agregarDonador(donacion)
              .subscribe((res: any) => {
                Swal.fire({
                  title: 'Muchas gracias por tu donación',
                  text: 'En breve recibiras tu comprobante por correo',
                  icon: 'success'
                });
              });
          });
        }
      })
      .render(this.paypalElement.nativeElement);
  }
}
