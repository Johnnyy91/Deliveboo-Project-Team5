@extends('layouts.app') <!--estendo layout.app-->



@section('content')
@foreach ($query as $order)
<div>
    <h2>Address order: {{ $order->address_client }}</h2>
{{-- @foreach ($order->dishes as $dish)
<!-- QUI NOI VEDIAMO TUTTI I PIATTI ASSOCIATI A UN ORDINE -->>
    Dishes:
    {{ $dish->name }}
@endforeach --}}
</div>
@endforeach
@endsection
