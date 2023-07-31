from rest_framework import generics, status, permissions, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Playlist, Track
from .serializers import PlaylistSerializer, TrackSerializer

class TrackViewSet(viewsets.ModelViewSet):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class PlaylistViewSet(viewsets.ModelViewSet):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer

    def perform_create(self, serializer):
        serializer.save()

    @action(detail=True, methods=['post'])
    def add_track(self, request, pk=None):
        playlist = self.get_object()
        track_id = request.data.get('track_id')
        if not track_id:
            return Response({'detail': 'track_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            track = Track.objects.get(id=track_id)
        except Track.DoesNotExist:
            return Response({'detail': 'Track with specified ID not found.'}, status=status.HTTP_404_NOT_FOUND)
        playlist.tracks.add(track)
        return Response({'detail': 'Track added to the playlist successfully.'}, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['post', 'delete'])
    def remove_track(self, request, pk=None):
        playlist = self.get_object()
        track_id = request.data.get('track_id')
        if not track_id:
            return Response({'detail': 'track_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            track = Track.objects.get(id=track_id)
        except Track.DoesNotExist:
            return Response({'detail': 'Track with specified ID not found.'}, status=status.HTTP_404_NOT_FOUND)
        playlist.tracks.remove(track)
        return Response({'detail': 'Track removed from the playlist successfully.'}, status=status.HTTP_204_NO_CONTENT)
