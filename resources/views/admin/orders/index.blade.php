@extends('layouts.app') <!--estendo layout.app-->



@section('content')
@foreach ($query as $order)
<div>
    <h1>Order:</h1>
    <h2>Address order: {{ $order->address_client }}</h2>
    <h3>Email Client: {{$order->email_client}}</h3>
    <h3>Total Price: {{$order->total_price}} Euro</h3>
{{-- @foreach ($order->dishes as $dish)

    Dishes:
    {{ $dish->name }}
@endforeach --}}
</div>
@endforeach
@endsection
