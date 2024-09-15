from rest_framework.permissions import BasePermission

class IsSystemAdmin(BasePermission):
    def has_permission(self, request, view):
        # Vérifiez si l'utilisateur est authentifié
        if not request.user.is_authenticated:
            return False

        if request.user.is_system_admin:
            return True 

        return False

class IsTaskAdmin(BasePermission):
    def has_permission(self, request, view):
        # Vérifiez si l'utilisateur est authentifié
        if not request.user.is_authenticated:
            return False

        if request.user.is_task_admin:
            return True 

        return False
class IsTaskAccountManager(BasePermission):
    def has_permission(self, request, view):
        # Vérifiez si l'utilisateur est authentifié
        if not request.user.is_authenticated:
            return False

        if request.user.is_task_account_manager:
            return True 

        return False
    
class IsRepartitor(BasePermission):
    def has_permission(self, request, view):
        # Vérifiez si l'utilisateur est authentifié
        if not request.user.is_authenticated:
            return False

        if request.user.is_repartitor:
            return True 

        return False
    
    
class IsTaskAdmin(BasePermission):
    def has_permission(self, request, view):
        # Vérifiez si l'utilisateur est authentifié
        if not request.user.is_authenticated:
            return False

        if request.user.is_task_admin:
            return True 

        return False

