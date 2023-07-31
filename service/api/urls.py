from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r"tracks", views.TrackViewSet)
router.register(r"playlists", views.PlaylistViewSet, basename='playlist')

urlpatterns = [
    path("", include(router.urls)),
    path("playlists/<int:pk>/add_track/", views.PlaylistViewSet.as_view({'post': 'add_track'}), name='playlist-add-track'),
    path("playlists/<int:pk>/remove_track/", views.PlaylistViewSet.as_view({'post': 'remove_track'}), name='playlist-remove-track'),
]
