import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Context extends Vue {
    e6= 1
    data = '';
    role = ["Product Owner", "Scrum master", "Team member"];
    data_table = ['Il aide l’équipe à respecter la méthode Agile',
        'Il anime les réunions de l’équipe',
        'Définir et communiquer la vision du produit',
        'Représente les besoins métier',
        'Développe le produit',
        'Doit respecter les besoins métiers'
    ]

    getData(): void {
        this.data = this.data_table[Math.floor(Math.random() * this.data_table.length)]
    }

    refreshData(data : string, role : string): void {
        if (role == this.role[1]){
            if (data == this.data_table[0] || data == this.data_table[1]){
                console.log("OK");
            }
            else{
                console.log("NOK");
            }
        }
        if (role == this.role[0]){
            if (data == this.data_table[2] || data == this.data_table[3]){
                console.log("OK");
            }
            else{
                console.log("NOK");
            }
        }
        if (role == this.role[2]){
            if (data == this.data_table[4] || data == this.data_table[5]){
                console.log("OK");
            }
            else{
                console.log("NOK");
            }
        }
        this.getData();
    }
}
