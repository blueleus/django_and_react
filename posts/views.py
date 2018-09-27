# Local Django
from posts.models import Post
from posts.serializers import PostSerializer

# External libraries
from rest_framework import generics


class PostListCreate(generics.ListCreateAPIView):
    """Using generic view."""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
