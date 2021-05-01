from django import forms
from .models import Message


class ContactForm(forms.ModelForm):
    sent_by = forms.CharField(widget=forms.TextInput(
        attrs={
            'id': 'sent_by',
            'class': 'input-group__input'}))

    sender_email = forms.EmailField(widget=forms.EmailInput(
        attrs={
            'id': 'sender_email',
            'class': 'input-group__input'}))

    subject = forms.CharField(widget=forms.TextInput(
        attrs={
            'id': 'subject',
            'class': 'input-group__input'}))

    message = forms.CharField(
        widget=forms.Textarea(
            attrs={
                'id': 'message',
                'class': 'input-group__input',
                'rows': 7,
                'cols': 50
            }
        )
    )

    class Meta:
        model = Message
        exclude = ('created_at',)
    # widgets = {
    #     'sent_by': forms.TextInput(attrs={
    #         'class': 'input-group__input'
    #     }),
    #
    #     'sender_email': forms.TextInput(attrs={
    #         'class': 'input-group__input'
    #     }),
    #
    #     'subject': forms.TextInput(attrs={
    #         'class': 'input-group__input'
    #     }),
    #
    #     'message': forms.Textarea(attrs={
    #         'class': 'input-group__input',
    #         'row': 7,
    #     })
    # }
