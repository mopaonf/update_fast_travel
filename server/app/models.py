from django.db import models



class Succursale(models.Model):
    nom = models.CharField(max_length=100)
    adresse = models.CharField(max_length=100)
    responsable = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    telephone = models.CharField(max_length=20)
    code_postal = models.CharField(max_length=10)

    def __str__(self):
        return self.nom

class Client(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    adresse = models.CharField(max_length=100)
    code_postal = models.CharField(max_length=10)
    ville = models.CharField(max_length=100)
    pays = models.CharField(max_length=100)
    telephone = models.CharField(max_length=20)
    email = models.EmailField(max_length=100)
    succursale = models.ForeignKey(Succursale, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nom} {self.prenom}"

class Assurance(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField()
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    date_debut = models.DateField()
    date_fin = models.DateField()
    prime = models.DecimalField(max_digits=10, decimal_places=2)
    statut = models.CharField(max_length=20, choices=[('actif', 'Actif'), ('resilie', 'Résilié')])

    def __str__(self):
        return self.nom