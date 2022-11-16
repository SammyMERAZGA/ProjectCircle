import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Context extends Vue {
    e6= 1
    data = '';
    dialogSuccessScrum = false;
    dialogErrorScrum = false;
    errorScrum = this.$store.state.errorScrum;
    goodScrum = this.$store.state.goodScrum;
    role = ["Product Owner", "Rh master", "Team member"];
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
                this.goodScrum = this.goodScrum + 1;
            }
            else{
                this.errorScrum = this.errorScrum + 1;
            }
        }
        if (role == this.role[0]){
            if (data == this.data_table[2] || data == this.data_table[3]){
                this.goodScrum = this.goodScrum + 1;
            }
            else{
                this.errorScrum = this.errorScrum + 1;
            }
        }
        if (role == this.role[2]){
            if (data == this.data_table[4] || data == this.data_table[5]){
                this.goodScrum = this.goodScrum + 1;
            }
            else{
                this.errorScrum = this.errorScrum + 1;
            }
        }

        if (this.errorScrum == 2){
            this.dialogErrorScrum = true;
            this.goodScrum = 0;
            this.errorScrum = 0;
        }

        if (this.goodScrum == 1){
            this.dialogSuccessScrum = true;
            this.goodScrum = 0;
            this.errorScrum = 0;
        }

        this.getData();
    }
}
